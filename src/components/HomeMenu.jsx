import React from "react";

const HomeMenu = () => {

    const foldersList = [
        { name: "My Computer", id: "my-computer" },
        { name: "Contact", id: "contact" },
        { name: "Projects", id: "projects" },
        { name: "Who", id: "who" },
        { name: "Experiences", id: "experiences" },
        { name: "Education", id: "education" },
        { name: "Bin", id: "bin" },
      ];

    return (
        <div className="homeButtonMenu">
         <ul>
        {foldersList.map((shortcut) => (
          <li style={{ listStyleType: "none" }} key={shortcut.id}>{shortcut.name}</li>
        ))}
      </ul>
        </div>
    )
}

export default HomeMenu;
