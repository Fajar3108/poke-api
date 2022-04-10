import React from "react";
import { Card, Paragraph, Picture } from "../../atoms";
import './style.css';

const Profile = ({src, name, email}) => {
    return (
        <Card className="profile-card">
            <Picture src={src} width={64} height={64} />
            <div className="profile-info">
                <h4>{name}</h4>
                <Paragraph content={email} />
            </div>
        </Card>
    )
}

export default Profile;