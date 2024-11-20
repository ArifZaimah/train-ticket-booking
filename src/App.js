import React, { useState } from "react";
import Home from "./components/Home";
import TrainSelection from "./components/TrainSelection";
import SeatSelection from "./components/SeatSelection";

function App() {
    const [selectedTrain, setSelectedTrain] = useState(null);
    const [selectedCoach, setSelectedCoach] = useState(null);

    return (
        <div>
            {!selectedTrain ? (
                <Home onTrainSelect={(train) => setSelectedTrain(train)} />
            ) : !selectedCoach ? (
                <TrainSelection
                    train={selectedTrain}
                    onCoachSelect={(coach) => setSelectedCoach(coach)}
                    onBack={() => setSelectedTrain(null)}
                />
            ) : (
                <SeatSelection
                    train={selectedTrain}
                    coach={selectedCoach}
                    onBack={() => setSelectedCoach(null)}
                />
            )}
        </div>
    );
}

export default App;
