import { log } from "../log";

export default () => <div>
    App is running :-)
    <button onClick={() => {
        log("App is running :-)");
    }}>Log to console</button>
</div>