#[derive(Deserialize, Debug)]
struct User {
    fingerprint: String,
    location: String,
}

const SUMMARY_API_URL: &str =
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&redirects=1&titles=";
const IMAGE_API_URL: &str = "https://en.wikipedia.org/api/rest_v1/page/summary/";

fn get_json_response(url: &str) -> Option<serde_json::value::Value> {
    let client = reqwest::Client::new();

    let mut res = match client.get(url).send() {
        Ok(res) => res,
        Err(e) => {
            error!("Error during send: {}", e);
            return None;
        }
    };

    if res.status() != 200 {
        error!("Status: {} for url: {}", res.status(), url);
        return None;
    }

    return match res.json() {
        Ok(res) => res,
        Err(e) => {
            error!("Error during json parsing: {}", e);
            return None;
        }
    };
}

fn get_title(language: &str) -> String {
    match language {
        "cobol" | "php" | "ocaml" | "typescript" => String::from(language),
        "cpp" => String::from("C%2B%2B"),
        "elixir" => String::from("elixir (programming language)"),
        "fsharp" => String::from("f sharp (programming language)"),
        "csharp" => String::from("c sharp (programming language)"),
        "objectivec" => String::from("Objective-C"),
        _ => String::from(language) + " (programming language)",
    }
}

pub fn get_summary_html(language: &str) -> Option<String> {
    let url = String::from(SUMMARY_API_URL) + &get_title(language);
    let json = get_json_response(&url)?;
    let html = json
        .get("query")?
        .get("pages")?
        .as_object()?
        .values()
        .next()?
        .get("extract")?
        .as_str()?;

    return Some(String::from(html));
}

pub fn get_image_url(language: &str) -> Option<String> {
    let url = String::from(IMAGE_API_URL) + &get_title(language);
    let json = get_json_response(&url)?;
    let html = json.get("originalimage")?.get("source")?.as_str()?;
    return Some(String::from(html));
}
