import { Typography } from "@mui/material";
import React from "react";
import CustomTimeline, { CustomTimelineSeparator } from "../timeline/TimeLine";
import TimelineItem from "@mui/lab/TimelineItem";
import Header from "../header/Header";

import PersonIcon from "@mui/icons-material/Person";

import "./Profile.css";
import { TimelineContent } from "@mui/lab";
import { Fragment } from "react";

const virtualData = {
    name: "Wan Kaining",
    tilte: "Senior Member",

    phoneNumber: "858-123-1234",
    email: "ILoveUmaru@gmail.com",
    birthday: "06th Decemeber 1899"
}

const CustomTimelineItem = ({ title, text }) => {
    return (
        <TimelineItem>
            <CustomTimelineSeparator />
            <TimelineContent className="timeline_content">
                <Typography variant="subtitle1" className="timelineItem_text">
                    <span>{title}:</span> {text}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    )
};

const Profile = () => {
    return (
        <Fragment>
            <div className="profile container_shadow">
                <div className="profile_name">
                    <Typography className="name">{virtualData.name}</Typography>
                    <Typography className="title">{virtualData.tilte}</Typography>
                </div>

                <figure className="profile_image">
                    <img src={require("../../assets/displayimage.jpg")} alt="" />
                </figure>

                <div className="profile_information">
                    <CustomTimeline icon={<PersonIcon />} >
                        <CustomTimelineItem title='phone' text={virtualData.phoneNumber} />
                        <CustomTimelineItem title='email' text={virtualData.email} />
                        <CustomTimelineItem title='birthday' text={virtualData.birthday} />
                    </CustomTimeline>
                    <br />
                </div>
            </div>
        </Fragment>

    );
};

export default Profile;
