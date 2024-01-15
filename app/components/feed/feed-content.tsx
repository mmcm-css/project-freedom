"use client";
import Image from "next/image";
import pfp from "../../../public/img/minji.png"
import React from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons/faThumbsUp";
import { faComment, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const FeedContent = () => {
    const [userContentFeed, setUserContentFeed] = React.useState<string>("");
    const placeholder = "Type something on your mind...";

    const handleInput = (event: any) => {
        setUserContentFeed(event.target.value)
    }

    console.log(userContentFeed);
    return (
        <>
            <section>
                <h2 className="ml-5 text-2xl">Latest Feed</h2>

                <div className="bg-[#373737] grid content gap-3">
                    <div className="flex align-middle row-auto items-center gap-3">
                        <Image src={pfp} width={30} height={30} alt="" />
                        <h4>Anonymous</h4>
                        <p className="text-xs text-[#6d6d6d] font-bold">(7351c98) . 4 hr.ago</p>
                    </div>
                    <div className="grid">
                        <ReactTextareaAutosize className="rounded-md bg-[#373737] min-h-20 resize-none" id="textarea" placeholder={placeholder} onChange={handleInput} value={userContentFeed} />
                    </div>
                    <div className="grid">

                        <button className="rounded-full bg-red-900 flex justify-center items-center gap-1">
                            POST
                        </button>
                    </div>
                </div>

                <div className="bg-[#373737] grid content gap-3">
                    <div className="flex align-middle row-auto items-center gap-3">
                        <Image src={pfp} width={30} height={30} alt="" />
                        <h4>Anonymous</h4>
                        <p className="text-xs text-[#6d6d6d] font-bold">(7351c98) . 4 hr.ago</p>
                    </div>

                    <div className="cursor-pointer">
                        <p className="text-sm">Shoutout sa akong crush sa A123 na si Laurence Kharl Devera, sana pag laki mo ay lumaki ka ng husto &lt;3</p>
                    </div>

                    <div className="content-actions flex items-center">
                        <div className="flex items-center content-actions gap-1 cursor-pointer">
                            <FontAwesomeIcon icon={faComment} />
                            <span>Reply (3)</span>
                        </div>

                        <div className="flex items-center content-actions gap-1 cursor-pointer">
                            <FontAwesomeIcon icon={faThumbsUp} />
                            <span>Upvote (25)</span>
                        </div>

                        <div className="flex items-center content-actions gap-1 cursor-pointer">
                            <FontAwesomeIcon icon={faThumbsDown} />
                            <span>Downvote</span>
                        </div>
                        <span>
                            <FontAwesomeIcon icon={faEllipsis} className="cursor-pointer" />
                        </span>
                    </div>
                </div>

                <div className="bg-[#373737] grid content gap-3">
                    <div className="flex align-middle row-auto items-center gap-3">
                        <Image src={pfp} width={30} height={30} alt="" />
                        <h4 className="text-[#ff00c7]">Admin</h4>
                        <p className="text-xs text-[#6d6d6d] font-bold">(f9b1a76) . 4 hr.ago</p>
                    </div>

                    <div>
                        <p className="text-sm">Hello everyone! Mag remind lang ko na dili nato pairalon atong pagkafeeling anonymous sa platform, kay at the end of the day, tinood gihapon na tao ang naa sa pikas na screen.</p>
                    </div>

                    <div className="content-actions flex items-center">
                        <div className="flex items-center content-actions gap-1 cursor-pointer">
                            <FontAwesomeIcon icon={faComment} />
                            <span>Reply (3)</span>
                        </div>

                        <div className="flex items-center content-actions gap-1 cursor-pointer">
                            <FontAwesomeIcon icon={faThumbsUp} />
                            <span>Upvote (25)</span>
                        </div>

                        <div className="flex items-center content-actions gap-1 cursor-pointer">
                            <FontAwesomeIcon icon={faThumbsDown} />
                            <span>Downvote</span>
                        </div>
                        <span>
                            <FontAwesomeIcon icon={faEllipsis} className="cursor-pointer" />
                        </span>
                    </div>
                </div>

                <div className="bg-[#373737] grid content gap-3">
                    <div className="flex align-middle row-auto items-center gap-3">
                        <Image src={pfp} width={30} height={30} alt="" />
                        <h4>Anonymous</h4>
                        <p className="text-xs text-[#6d6d6d] font-bold">(7351c98) . 4 hr.ago</p>
                    </div>

                    <div>
                        <p className="text-sm">Shoutout sa akong crush sa A123 na si Laurence Kharl Devera, sana pag laki mo ay lumaki ka ng husto &lt;3</p>
                    </div>

                    <div className="content-actions flex items-center">
                        <div className="flex items-center content-actions gap-1 cursor-pointer">
                            <FontAwesomeIcon icon={faComment} />
                            <span>Reply (3)</span>
                        </div>

                        <div className="flex items-center content-actions gap-1 cursor-pointer">
                            <FontAwesomeIcon icon={faThumbsUp} />
                            <span>Upvote (25)</span>
                        </div>

                        <div className="flex items-center content-actions gap-1 cursor-pointer">
                            <FontAwesomeIcon icon={faThumbsDown} />
                            <span>Downvote</span>
                        </div>
                        <span>
                            <FontAwesomeIcon icon={faEllipsis} className="cursor-pointer" />
                        </span>
                    </div>
                </div>

                <div className="bg-[#373737] grid content gap-3">
                    <div className="flex align-middle row-auto items-center gap-3">
                        <Image src={pfp} width={30} height={30} alt="" />
                        <h4>Anonymous</h4>
                        <p className="text-xs text-[#6d6d6d] font-bold">(7351c98) . 4 hr.ago</p>
                    </div>

                    <div>
                        <p className="text-sm">Shoutout sa akong crush sa A123 na si Laurence Kharl Devera, sana pag laki mo ay lumaki ka ng husto &lt;3</p>
                    </div>

                    <div className="content-actions flex items-center">
                        <div className="flex items-center content-actions gap-1 cursor-pointer">
                            <FontAwesomeIcon icon={faComment} />
                            <span>Reply (3)</span>
                        </div>

                        <div className="flex items-center content-actions gap-1 cursor-pointer">
                            <FontAwesomeIcon icon={faThumbsUp} />
                            <span>Upvote (25)</span>
                        </div>

                        <div className="flex items-center content-actions gap-1 cursor-pointer">
                            <FontAwesomeIcon icon={faThumbsDown} />
                            <span>Downvote</span>
                        </div>
                        <span>
                            <FontAwesomeIcon icon={faEllipsis} className="cursor-pointer" />
                        </span>
                    </div>
                </div>


            </section >
        </>
    )
}

export default FeedContent;