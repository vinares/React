
function Workday() {
    return (
        <h1>Work Harder</h1>
    )
}

function Weekends() {
    return (
        <h1>Get Some Rest, Dude.</h1>
    )
}

function ErrorComponent() {
    return (
        <h1>Today is weird.</h1>
    )
}


export default function CurrentMessage({day}) {
    const weekday = (day >=1 && day <= 5);
    const weekends = (day >= 6 && day <= 7);
    let message;
    
    if (weekday) {
        message = <Workday />
    } else if (weekends) {
        message = <Weekends />
    } else {
        message = <ErrorComponent />
    }

    return (
        <div>
            {message}
        </div>
    )
}