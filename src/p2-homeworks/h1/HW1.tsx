import React from 'react'
import Message from "./Message";
// import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Artem',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla arcu non sagittis dapibus. Mauris tristique interdum finibus. Vivamus elementum molestie massa sit amet fringilla. Pellentesque non magna gravida, facilisis dui ut, hendrerit ipsum. Aliquam sapien orci, vulputate vel tincidunt eget, feugiat ut erat. Maecenas et aliquet arcu, et accumsan leo. Proin in tempor mauris. Cras risus purus, accumsan in nisl fringilla, molestie scelerisque ligula. Sed quis felis auctor, tincidunt nisi non, sollicitudin ipsum. In imperdiet nec sapien at placerat. Nam eros neque, malesuada sed euismod eu, cursus nec massa. Vestibulum ac quam vehicula ipsum tincidunt viverra. Donec viverra dui nisi, ut placerat urna maximus a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed dolor vehicula, placerat lacus vel, dapibus nibh. Aliquam faucibus suscipit metus vitae condimentum. Nam eu euismod felis. Nam at molestie enim. Quisque a tempus purus. Cras a metus lectus. Sed congue facilisis est a molestie. Fusce erat arcu, facilisis quis dolor non, laoreet pulvinar purus. Donec eget odio quis enim luctus ullamcorper. Aenean dapibus mauris id elementum vehicula. Etiam efficitur ante ullamcorper risus convallis volutpat. Morbi vel tincidunt nisl. Sed dapibus vel sem in ultricies.',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            {/*<hr/>*/}
            {/*homeworks 1*/}
            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            {/*<hr/>*/}
            {/*/!*для личного творчества, могу проверить*!/*/}
            {/*/!*<AlternativeMessage/>*!/*/}
            {/*<hr/>*/}
        </div>
    )
}

export default HW1
