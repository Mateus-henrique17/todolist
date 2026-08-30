import "./ProgressBar.css";

export const ProgressBar = ({ total = 0, completed = 0 }) => {
  if (total === 0) return null;

  const percentageDone = (completed / total) * 100;

  return (
    <>
      <label htmlFor="task-progress">{Math.round(percentageDone)}%</label>
      <progress
        id="task-progress"
        className="task-progress"
        value={percentageDone}
        max={100}
      ></progress>
    </>
  );
};
