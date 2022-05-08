import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header type="static" className={"text-black shadow-lg"} />
      <div
        style={{ minHeight: "calc(100vh - 108px)", lineHeight: "36px" }}
        className="container mx-auto  px-8 text-xl  max-w-[750px] "
      >
        <button className="btn btn-ghost my-5" onClick={() => navigate("/")}>
          Go Home
        </button>
        <div className="my-10">
          <h1 className="font-semibold text-4xl my-8">
            Difference between Javasript and Node.js?
          </h1>
          <ul>
            <li>
              ⇛ Javascript is a dynamic multi-paradigm single threaded
              programming language.
            </li>
            <li>
              ⇛ Whereas Node.js is a runtime environment for javascript built
              using Google Chrome V8 engine. We can execute javascript code on
              any system that has node.js runtime installed.
            </li>
          </ul>
        </div>

        <div className="my-20">
          <p className="font-semibold text-4xl my-8">
            When should you use nodejs and when should you use mongodb?
          </p>

          <p>
            ⇛ Node js is best suited for non-blocking i/o. We can use Node.js to
            build backend API services. It should not be used for very high cpu
            intensive tasks since it is single threaded.
          </p>
          <p className="mt-3">
            ⇛ Mongodb is a database program where we can store and retrieve
            data. We should use mongodb when we need to write data to database
            quickly. It is also useful when we do not have predefined database
            schema
          </p>
        </div>

        <div className="my-20">
          <p className="font-semibold text-4xl my-8">
            Differences between sql and nosql?
          </p>

          <p className="text-2xl font-bold">SQL</p>
          <ul className="list-disc">
            <li>Data are relational</li>
            <li>Data needs to be stored in a tabular structure</li>
            <li>Writing data to database is slower</li>
            <li>Reading complex queries are quicker and easier</li>
          </ul>
          <p className="text-2xl font-bold mt-5">NoSQL</p>
          <ul className="list-disc">
            <li>Data are not relational</li>
            <li>Data are stored in a json like document</li>
            <li>Writing data to database is faster</li>
            <li>Reading complex queries are slower and harder</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Blogs;
