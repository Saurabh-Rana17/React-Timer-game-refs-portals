import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function (
  { targetTime, remainingTime, onRestart },
  ref
) {
  const dialog = useRef();
  const userLost = remainingTime <= 0;
  const score = Math.abs(
    Math.round((1 - remainingTime / (targetTime * 1000)) * 100)
  );

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <>
      <dialog ref={dialog} className="result-modal">
        {userLost && <h2> You Lost</h2>}
        {!userLost && <h2>Your Score : {score}</h2>}
        <p>
          The Target Time was <strong> {targetTime}</strong> seconds.
        </p>
        <p>
          You stoppped the timer with{" "}
          <strong> {formattedRemainingTime} seconds left </strong>
        </p>
        <form method="dialog">
          <button onClick={onRestart}>Close</button>
        </form>
      </dialog>
    </>
  );
});
export default ResultModal;
