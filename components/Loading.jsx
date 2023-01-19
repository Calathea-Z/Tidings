import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styled from "styled-components";
import BeatLoader from 'react-spinners/BeatLoader'; 

const Loading = () => {
    return (
        <center style={{display: "grid", placeItems: "center", height: "100vh"}}>
            <div>
                <BeatLoader
                    color= "#3CBC28"
                    aria-label={"Loading"}
                    size = {60}
                />
                <h4>..Loading</h4>
                <img
                 src="https://i.imgur.com/uQ4iitt.jpg"
                 alt=''
                 style={{ marginBottom: 10, marginTop: 10}}
                 height={200}
                 width={200}   
                    />
        
                <BeatLoader
                    color= "#3CBC28"
                    aria-label={"Loading"}
                    size = {60}
                />
            </div>
        </center>
    )
}

export default Loading;
