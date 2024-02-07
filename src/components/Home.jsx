import { useRef } from "react";
import axios from "axios";

const Home = () => {
  const titleRef = useRef();
  const viewNumRef = useRef();

  const createPost = () => {
    const newpost = {
      title: titleRef.current.value,
      viewNum: 25,
    };

    axios
      .post("http://localhost:27017/api/new-post", newpost)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-red-500 h-[100vh] font-bold text-2xl flex justify-center items-center flex-col gap-4">
      <input ref={titleRef} type="text" />

      <input ref={viewNumRef} type="number" />
      <button onClick={() => createPost()}>create</button>
    </div>
  );
};

export default Home;
