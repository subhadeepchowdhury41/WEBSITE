import React from "react";

function Sidebar(props) {
    return (
        <div className="w-full h-fit flex flex-col p-[16px] relative">
            <div className="sticky top-[70px]">
                <div className="w-full font-semibold text-[26px] text-left ">
                    Gymkhana
                </div>
                {props.data.map((index) => {
                    return (
                        <div className="flex flex-col w-full ml-4">
                            <div className="font-semibold text-[20px] my-1">
                                {index?.title}
                            </div>
                            {index.children.map((i) => {
                                return (
                                    <div
                                        className={
                                            props.ActiveIndex === index.id &&
                                                i.id === props.ActiveId
                                                ? "font-[400] text-[16px] text-[rgb(73,93,181)] pl-8 cursor-pointer"
                                                : "font-[400] text-[16px] text-[rgb(0,0,0)] pl-8 cursor-pointer"
                                        }
                                        onClick={() => {
                                            props.setActiveIndex(index.id);
                                            props.setActiveId(i.id);
                                            props.setMatchingItem(
                                                props.data
                                                    .find((item) => item.id === index.id)
                                                    ?.children.find((child) => child.id === i.id)
                                            );
                                        }}
                                    >
                                        {i.title}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Sidebar;
