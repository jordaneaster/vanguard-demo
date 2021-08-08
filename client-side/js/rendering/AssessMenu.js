import apiActions from "../api-actions/api-actions";
import ResponsesPage from "../pages/ResponsesPage";

export default class AssesmentMenu {


  getAfraid() {
    return apiActions.getRequest("http://localhost:8080/mood/10", (mood) => {
      const app = document.querySelector("#app");
      console.log(mood);
    });
  }
  postAfraid(){
      return  apiActions.postRequest(
        "http://localhost:8080/send_response",
        {
          mood:mood
        },
        (app.innerHTML = HomePage()),
        (response) => (app.innerHTML = ResponsesPage(response))
      );
  }
  getAnxious() {
    return apiActions.getText("http://localhost:8080/mood/11", (mood) => {
      const app = document.querySelector("#app");
      console.log(mood);
    });
  }
  getSad() {
    return apiActions.getText("http://localhost:8080/mood/17", (mood) => {
      const app = document.querySelector("#app");
      console.log(mood);
    });
  }
  getLonely() {
    return apiActions.getText("http://localhost:8080/mood/16", (mood) => {
      const app = document.querySelector("#app");
      console.log(mood);
    });
  }
  getDepressed() {
    return apiActions.getText("http://localhost:8080/mood/12", (mood) => {
      const app = document.querySelector("#app");
      console.log(mood);
    });
  }
  getHopeless() {
    return apiActions.getText("http://localhost:8080/mood/15", (mood) => {
      const app = document.querySelector("#app");
      console.log(mood);
    });
  }
  getSuicidal() {
    return apiActions.getText("http://localhost:8080/mood/18", (mood) => {
      const app = document.querySelector("#app");
      console.log(mood);
    });
  }
  getHomicidal() {
    return apiActions.getText("http://localhost:8080/mood/14", (mood) => {
      const app = document.querySelector("#app");
      console.log(mood);
    });
  }
  getExhausted() {
    return apiActions.getText("http://localhost:8080/mood/13", (mood) => {
      const app = document.querySelector("#app");
      console.log(mood);
    });
  }
}
