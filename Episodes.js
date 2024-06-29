import styled from "@emotion/styled/macro"

export const links = [
    "https://firebasestorage.googleapis.com/v0/b/animebruh-91c26.appspot.com/o/S01%20E26.New%20Mission(360p).mkv?alt=media&token=1b95f06d-dbe7-4b38-a613-c2d125fb3e51",
    "https://api.consumet.org/anime/9anime/watch/1593321&server=vidcloud",
    "https://firebasestorage.googleapis.com/v0/b/animebruh-91c26.appspot.com/o/T1.mp4?alt=media&token=dd101473-43a4-4d99-b626-92ae10b4f14a",
    "https://firebasestorage.googleapis.com/v0/b/animebruh-91c26.appspot.com/o/T2.mp4?alt=media&token=f6d9d42d-4e47-4598-a4ef-a00a0503712f",
    "https://firebasestorage.googleapis.com/v0/b/animebruh-91c26.appspot.com/o/T3.mp4?alt=media&token=32d92f66-e9eb-4604-8b24-18b1833514ad",
    "https://firebasestorage.googleapis.com/v0/b/animebruh-91c26.appspot.com/o/S4.mp4?alt=media&token=7255faf3-29b2-492c-ac10-1a8e6ed086ae",
    "https://firebasestorage.googleapis.com/v0/b/animebruh-91c26.appspot.com/o/S5.mp4?alt=media&token=b619fcba-faf4-45a4-9d36-be2ed2a7875e",
]

export const Episodes = (props) => {
    var list = [];
    for (var i = 1; i <= 26; i++) {
        list.push(i);
    }

    return(
        <Con>
            {list.map((element) => 
            <Episode onClick={()=>{
                props.setSource(links[(element-1)%5])
                props.setEp(element)
            }}>{element}</Episode>
            )}
        </Con>
    )
}

const Con = styled.div`
    grid-template-columns: repeat(10, 1fr);
    @media (max-width: 575px){
        grid-template-columns: repeat(5, 1fr);
    }
    margin-bottom: 30px;
    padding: 10px;
    background-color: #010101;
    display: grid;
    gap: 4px;
    border-radius: 0 0 5px 5px;
`

const Episode = styled.a`
    &.current, &.current:hover{
        background-color: #5A2E98;
        color: #EEEEEE;
    }
    &:hover{
        background-color: #AAAAAA;
        color: #222222;
    }
    text-decoration: none;
    transition-duration: 150ms;
    cursor: pointer;
    color: #777777;
    text-align: center;
    background-color: #171717;
    border-radius: 2px;
    font-size: 12px;
    font-weight: 600;
    height: 27.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1px;
`

