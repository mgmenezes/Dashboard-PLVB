const MetricCard = ({
  icon,
  color,
  title,
  value,
  changeText,
  linkText,
  linkHref,
}) => {
  const bgColors = {
    green: "bg-green-100",
    blue: "bg-blue-100",
    red: "bg-red-100",
    yellow: "bg-yellow-100",
  };

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center">
          <div className={`flex-shrink-0 ${bgColors[color]} rounded-md p-3`}>
            {icon}
          </div>
          <div className="ml-5 w-0 flex">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">
                {title}
              </dt>
              <dd>
                <div className="flex items-center">
                  <span className="text-2xl font-semibold text-gray-900">
                    {value}
                  </span>
                  <span className="ml-2 text-sm font-medium text-green-600">
                    {changeText}
                  </span>
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-4 sm:px-6">
        <div className="text-sm">
          <a
            href={linkHref}
            className="font-medium text-[#007532] hover:text-[#65B32E]"
          >
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
