function getIssues() {
  fetch('https://api.github.com/repos/mjhough/javascript-fetch-lab/issues', {
    headers: {
      Authorization: `token ${getToken()}`
    }
}).then(res => showIssues(res));
  
}

function showIssues(json) {
  responseList = `<ul><li>${json.name}</li><li>${json.body}</li></ul>`
  $("#issues").append(responseList)
}

function createIssue() {
  const repo = 'javascript-fetch-lab'
  const owner = 'mjhough'
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  fetch(`https://api.github.com/repos/${owner}/${repo}/issues`, {
    method: "post",
    headers: {
      Authorization: `token ${getToken()}`
    },
    title: title,
    body: body
  }).then(res => showIssues(res));
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: "post",
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => showForkedRepo(res));
}

function showForkedRepo(res) {
  const url = res.url;
  $("#results").html(`<a href="${url}">${url}</a>`);
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
