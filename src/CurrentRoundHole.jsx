export default function CurrentRoundHole(
    {
        holeNumber = 1,
        score = 1,
        par= 1,
        gir = false,
        fairway = false,
        putts = 0
    }) {
    const relationToPar = score - par
    return (
        <tr className="currentRound">
            <td className="currentRound__holeNumber">{holeNumber}</td>
            <td className="currentRound__par">{par}</td>
            <td className="currentRound__score">{score}</td>
            <td className="currentRound__gir">{gir}</td>
            <td className="currentRound__fairway">{fairway}</td>
            <td className="currentRound__putts">{putts}</td>
        </tr>
    );
}