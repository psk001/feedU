import React from 'react';
// import { CodeIcon } from "@heroicons/react/solid";
import { advertisements } from '../data';
import './Advertisement.css'; 

export default function Advertisement(){
    return (
         <div id="advertisements" className="">  
            <div className="">
                <div className="">
                   {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
                    <h1 className="">
                        Up for grab!
                    </h1>
                    <p className="">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                        facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                        fuga dolore.
                    </p>
                </div>
                <div className="col">
                    {advertisements.map((items) => (
                        <a
                            href={items.link}
                            key={items.image}
                            className="card">
                            <div className="col-md-3">
                                <img
                                    alt="gallery"
                                    className="card-img-top"
                                    src={items.image}
                                />
                                <div className="col">
                                    <h2 className="card-title">
                                        {items.title}
                                    </h2>
                                    <h3 className="card-title">
                                        {items.subtitle}
                                    </h3>
                                    <p className="card-text">{items.description}</p>
                                    <p className="">{items.address}</p>
                                    <p className="">{items.contact}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>        
    );
} 

