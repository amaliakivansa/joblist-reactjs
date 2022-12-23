import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobDetail } from "../service/job";

export default function CardDetailJob() {
  const plainString = (params) => {
    params.replace(/<[^>]+>/g, "");
  };
  const [item, setItem] = useState();
  const { jobID } = useParams();
  const fetchDetail = (id) => {
    getJobDetail(id).then((res) => {
      setItem(res);
    });
  };
  useEffect(() => {
    fetchDetail(jobID);
  }, []);

  console.log("item", item);

  return (
    <div className="w-4/5 mx-auto bg-neutral-200 p-4 rounded-md mb-36">
      <div className="mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
        <div
          className="py-2 px-4 divide-y divide-gray-100 "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {item !== undefined && (
            <div
              className="border-b border-gray-200 block px-4 py-2 text-md text-gray-700 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
              role="menuitem"
            >
              <div className="flex justify-between items-center">
                <span className="flex flex-col">
                  <span className="text-xs text-gray-400">
                    {item.type}/{item.location}
                  </span>
                  <h1 className="font-bold text-2xl text-cyan-800">
                    {item.title}
                  </h1>
                </span>
                <br />
              </div>
              <div className="flex justify-between items-start gap-20">
                <div>
                  <h1 className="font-bold text-2xl text-black md:mt-4 mt-2">
                    {item.company}
                  </h1>
                  <div
                    className="text-justify"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></div>
                </div>
                <div>
                  <div className="w-96 p-2 m-auto bg-white shadow-lg rounded-2xl">
                    <img
                      src={item.company_logo}
                      alt="company pict"
                      className="w-32 p-4 m-auto h-36"
                    />
                    <div>
                      <a
                        href={item.company_url}
                        className="text-md text-blue cursor-pointer "
                      >
                        check our company profile :{" "}
                        <span className="font-bold">{item.company_url}</span>
                      </a>
                    </div>
                  </div>
                  <div className="w-96 mt-6 md:mt-8 p-2 m-auto bg-white shadow-lg rounded-2xl">
                    <p className="text-md font-bold">How to Apply :</p>
                    <div
                      className="text-justify "
                      dangerouslySetInnerHTML={{ __html: item.how_to_apply }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
