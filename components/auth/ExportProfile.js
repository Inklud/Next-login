import Link from "next/link";

export default function ExportProfile(props) {
  return (
    <Link
      href={`data:text/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify(props.user)
      )}`}
    >
      <a
        type="button"
        download="myprofile.json"
        className="p-3 inline mr-3 bg-gray-800 hover:bg-gray-900 text-white rounded
          shadow"
      >
        {`Export user`}
      </a>
    </Link>
  );
}
