import React from "react";

function Sidebar(props) {
  return (
<<<<<<< HEAD
    <div className='w-full h-fit flex flex-col p-[16px] relative'>
      <div className='sticky top-[70px]'>
        <div className='w-full font-semibold text-[26px] text-left '>
          Academic Programmes
        </div>
        {
          props.data.map((index, i) => {
            return (
              <div key={i} className='flex flex-col w-full'>
                <div className='font-semibold text-[20px] my-1'>
                  {index?.label}
                </div>
                {
                  index.children.map((i) => {
                    return (
                      <div key={i} className={props.ActiveIndex === index.index && i.id === props.ActiveId ? 'font-[400] text-[16px] text-[rgb(73,89,231)] pl-4 cursor-pointer' : 'font-[400] text-[16px] text-gray-700 pl-4 cursor-pointer'}
                        onClick={() => {
                          props.setActiveIndex(index.index);
                          props.setActiveId(i.id);
                          props.setMatchingItem(props.data.find((item) => item.index === index.index)?.children.find((child) => child.id === i.id));
                        }}
                      >
                        {i.label}
                      </div>
                    )
                  })
                }
              </div>

            )
          })
        }
      </div>
    </div>
  )
=======
    <div className="w-full h-fit flex flex-col p-[16px] relative">
      <div className="sticky top-[70px]">
        <div className="w-full font-semibold text-[26px] text-left ">
          Academic Programmes
        </div>
        {props.data.map((index) => {
          return (
            <div className="flex flex-col w-full">
              <div className="font-semibold text-[20px] my-1">
                {index?.label}
              </div>
              {index.children.map((i) => {
                return (
                  <div
                    className={
                      props.ActiveIndex === index.index &&
                      i.id === props.ActiveId
                        ? "font-[400] text-[16px] text-[rgb(11,11,11)] pl-4 cursor-pointer"
                        : "font-[400] text-[16px] text-gray-700 pl-4 cursor-pointer"
                    }
                    onClick={() => {
                      props.setActiveIndex(index.index);
                      props.setActiveId(i.id);
                      props.setMatchingItem(
                        props.data
                          .find((item) => item.index === index.index)
                          ?.children.find((child) => child.id === i.id)
                      );
                    }}
                  >
                    {i.label}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
>>>>>>> 6bf04bed392c8996d4e228bd1a4abf8c369c88d4
}

export default Sidebar;
