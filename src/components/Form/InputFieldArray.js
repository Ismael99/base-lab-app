import React from "react";
import { Field, ErrorMessage, FieldArray } from "formik";
import PropTypes from "prop-types";
import { PencilAltIcon, ClipboardListIcon, DocumentReportIcon } from "@heroicons/react/outline";
export const InputFieldArray = ({ name, isInterfaceView, values }) => {
  return (
    <FieldArray
      name={name}
      className="w-full"
      render={(arrayHelpers) => (
        <div className="flex-col items-center justify-center w-full px-5">
          {values[name].map((formItem, index) => (
            <div key={index} className="flex flex-row items-center justify-center">
              <div className="flex flex-col w-11/12 px-2 py-2 mt-2 mb-3 bg-gray-100 border border-gray-300">
                <span className="flex flex-col w-full mb-4">
                  <span className="flex flex-row">
                    <PencilAltIcon className="w-5 h-5 mr-2" />
                    <label className="text-sm text-gray-700">Campo</label>
                  </span>
                  <Field
                    disabled={isInterfaceView}
                    name={`${name}.${index}.label`}
                    placeholder={"Campo..."}
                    type="text"
                    className={`w-full p-1 px-2 my-3 outline-none appearance-none`}
                  />
                  <div className="w-full mx-auto text-xs text-red-500">
                    <ErrorMessage name={`${name}.${index}.label`} />
                  </div>
                </span>
                <span className="flex flex-col w-full mb-4">
                  <span className="flex flex-row">
                    <ClipboardListIcon className="w-5 h-5 mr-2" />
                    <label className="text-sm text-gray-700">Resultados</label>
                  </span>
                  <Field
                    disabled={isInterfaceView}
                    name={`${name}.${index}.value`}
                    placeholder={"Resultado..."}
                    type="text"
                    className={`w-full p-1 px-2 my-3 outline-none appearance-none`}
                  />
                  <div className="w-full mx-auto text-xs text-red-500">
                    <ErrorMessage name={`${name}.${index}.value`} />
                  </div>
                </span>
                <span className="flex flex-col w-full mb-4">
                  <span className="flex flex-row">
                    <DocumentReportIcon className="w-5 h-5 mr-2" />
                    <label className="text-sm text-gray-700">Rango Normal</label>
                  </span>
                  <Field
                    disabled={isInterfaceView}
                    name={`${name}.${index}.rn`}
                    placeholder={"Rango normal..."}
                    type="text"
                    className={`w-full p-1 px-2 my-3 outline-none appearance-none`}
                  />
                  <div className="w-full mx-auto text-xs text-red-500">
                    <ErrorMessage name={`${name}.${index}.rn`} />
                  </div>
                </span>
              </div>
              {!isInterfaceView && (
                <button
                  className="ml-5 text-xl text-red-600 hover:text-red-800 transform hover:scale-125"
                  type="button"
                  onClick={() => {
                    if (values[name].length > 1) {
                      arrayHelpers.remove(index);
                    }
                  }} // remove a form from the list of forms
                >
                  {"\u2717"}
                </button>
              )}
            </div>
          ))}
          {!isInterfaceView && (
            <div className="flex justify-center w-full mt-5">
              <button
                className="px-2 my-2 text-white bg-blue-500 rounded-smi hover:bg-blue-600 transform hover:scale-105"
                type="button"
                onClick={() => arrayHelpers.push({ label: "", value: "" })} // insert an empty string at a position
              >
                {`Agregar campo \u271a`}
              </button>
            </div>
          )}
        </div>
      )}
    />
  );
};

InputFieldArray.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isInterfaceView: PropTypes.bool.isRequired,
};
