import React, { useState } from "react";
import FileDownload from "js-file-download";
import axios from "axios";
import { useMyContext } from "../../Context/Global";
const DownloadImage = () => {
  const { BACKEND_URL } = useMyContext();
  const [url, setUrl] = useState();

  const handleDownload = async (e) => {
    e.preventDefault();
    axios({
      url: `${BACKEND_URL}/api/download-images`,
      method: "POST",
      responseType: "blob",
      data: {
        url,
      },
    }).then((response) => {
      console.log(response);
      FileDownload(response.data, "downloaded.jpeg");
    });
  };
  return (
    <React.Fragment>
      <input
        type="text"
        name=""
        id=""
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleDownload}>Download</button>
    </React.Fragment>
  );
};

export default DownloadImage;
