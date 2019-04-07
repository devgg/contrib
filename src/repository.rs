use std::fmt;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Topic {
    pub name: String,
    pub url: String,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Label {
    pub name: String,
    pub count: i64,
    pub color: String,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Repository {
    pub name_with_owner: String,
    pub url: String,
    pub description: String,
    pub homepage_url: String,
    pub avatar_url: String,
    pub num_forks: i64,
    pub num_issues: i64,
    pub num_pull_requests: i64,
    pub num_stars: i64,
    pub labels: Vec<Label>,
    pub issues: Vec<Vec<String>>,
    pub languages: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize, Default)]
pub struct Language {
    pub name: String,
    pub summary_html: String,
    pub image_url: String,
    pub repositories: Vec<Repository>,
}

impl fmt::Display for Repository {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(
            f,
            "name with owner: {}\nnum_stars: {}\nnum_issues: {}\ndescription: {}\nlabel_counts: {:#?}\n",
            self.name_with_owner, self.num_stars, self.num_issues, self.description, self.labels
        )
    }
}
