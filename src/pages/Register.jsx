import { useState } from "react";
import FormRegister from "../components/register/FormRegister";

function Register() {
  const [activeTab, setActiveTab] = useState("humanos");

  const tabs = [
    { id: "humanos", label: "Humanos" },
    { id: "perros", label: "Perros" },
  ];

  return (
    <div className="flex justify-center items-center md:min-h-screen bg-gray-100 md:p-6">
      <div className="w-full max-w-7xl bg-white rounded-lg shadow-lg p-6">
        {/* Tabs Header */}
        <div className="mb-4 border-b border-gray-200">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
            {tabs.map((tab) => (
              <li key={tab.id} className="mr-2" role="presentation">
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === tab.id
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300"
                    }`}
                  type="button"
                  role="tab"
                  aria-controls={tab.id}
                  aria-selected={activeTab === tab.id}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Tabs Content */}
        <div>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`rounded-lg bg-gray-50 ${activeTab === tab.id ? "block" : "hidden"
                } flex items-stretch h-full`}
              id={tab.id}
              role="tabpanel"
              aria-labelledby={`${tab.id}-tab`}
            >
              <FormRegister />
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}

export default Register;
