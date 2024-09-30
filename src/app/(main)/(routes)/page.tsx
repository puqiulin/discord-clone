import {UserButton} from "@clerk/nextjs";
import {ModeToggle} from "@/components/mode-toggle";
import {Button} from "@/components/ui/button";

export default function Home() {
    return (
        <div>
            <UserButton/>
            <ModeToggle/>
            <Button>Button</Button>
            hello world!
        </div>
    );
}
