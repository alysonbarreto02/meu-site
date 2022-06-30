export function Languages({ url, title }) {
    return <div className="w-72 h-40 mx-10 flex-nowrap relative hover:bottom-1 hover:shadow hover:shadow-bg-gray-50">
        <div className="text-center h-32 w-32">
            <img src={url} alt="" className="w-full h-full" />
            <strong className="text-gray-50 flex-nowrap text-sm">{title}</strong>
        </div>
    </div>;
}
