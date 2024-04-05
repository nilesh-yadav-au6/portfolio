function Experience() {
  return (
    <div className="border-b bg-primary border-orange justify-between w-full h-full px-6 md:px-16">
      <h1 className="w-full text-center text-purple border-x border-orange font-extrabold text-3xl py-10">
        Experience
      </h1>
      <div className="border-x border-orange flex justify-around flex-wrap-reverse w-full h-full px-16 py-10">
        <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              <svg
                className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
              </svg>
            </span>
            <div className="mb-6">
              <h3 className="text-2xl text-orange">
                Software Development Engineer 2
              </h3>
              <p className="text-md text-orange">
                Hatio Innovations OCT 2023 - NOV 2023
              </p>
            </div>
            <div>
              <p className="text-md">
                Worked on a cross-platform mobile application using React native
                and Typescript to allow crypto currency traders/investors to
                trade and invest.
              </p>
              <p className="text-md">
                Integrated Freshchat mobile sdk provided by Freshworks. This
                helped in improving the customer support with features like chat
                support, raising a ticket for a query and provide FAQs section.
                Also enabled push notifications for the chats.
              </p>
              <p className="text-md">
                Integrated Sentry for automatic errors reporting and exceptions,
                and identifying performance issues.
              </p>
            </div>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              <svg
                className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
              </svg>
            </span>
            <div className="mb-6">
              <h3 className="text-2xl text-orange">
                Software Development Engineer 1
              </h3>
              <p className="text-md text-orange">
                Hatio Innovations NOV 2020 - SEP 2023
              </p>
            </div>
            <div>
              <p className="text-md">
                Created operation portal (React + Typescript) for BillDesk to
                digitalize the manual process of fixing the commission rate for
                the merchants depending on the type payment methods opted by the
                merchants.
              </p>
              <p className="text-md">
                Worked on web application (React + Typescript) Payouts to send
                bulk payments to customers, partners and employees.
              </p>
              <p className="text-md">
                Enhanced code quality by developing generic reusable components
                and introducing Lazy loading, Custom hooks, useCallback and
                useMemo, resulting in a remarkable average product performance
                boost of 15%.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Experience;
