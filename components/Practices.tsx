import { practices } from "@/constants"
import PracticeCard from "./cards/PracticesCard"
import Button from "./shared/Button"

export default function Practices() {
    return (
        <section className="flex flex-col items-center gap-2">
            <div className="flex justify-center items-center sm:flex-row flex-col gap-2">
                {practices.map((practice) => (
                    <PracticeCard {...practice} />
                ))}
            </div>
            <Button className="btn btn-primary">
                  See All
            </Button>
        </section>
    )
}
