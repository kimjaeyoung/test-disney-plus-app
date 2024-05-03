import axiox from "axios";

const instance = axiox.create({
   baseURL: "https://api.themoviedb.org/3",
   params: {
    api_key: "fc7c2e2cfdd91dd3f58685c5b2432a7a",
    language: "ko-KR"
   },
}); 

export default instance;