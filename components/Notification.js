export default function Notification(props) {
  return (
    <div
      className="border border-gray-800 relative py-3 pl-4 pr-10 leading-normal  rounded-lg"
      role="alert"
    >
      {props.message}
    </div>
  );
}
