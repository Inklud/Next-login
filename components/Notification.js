export default function Notification(props) {
  return (
    <div
      className="bg-gray-700 relative py-3 pl-4 pr-10 leading-normal text-white rounded-lg"
      role="alert"
    >
      {props.message}
    </div>
  );
}
