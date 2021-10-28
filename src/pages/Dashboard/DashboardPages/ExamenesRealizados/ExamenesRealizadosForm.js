import React from "react";
import { Form } from "../../../../components/Form";
import { ExamenRealizadoSchema } from "../../../../schema";
import { setCurrentExamenRealizado } from "../../../../redux/actions/examenesRealizadosActions";

export const ExamenesRealizadosForm = ({
  examenesRealizados,
  id,
  isInterfaceView,
  redirectToBack,
  ...props
}) => {
  let examenRealizadoCurrent = examenesRealizados?.find((examen_realizado) => {
    return examen_realizado.examen_realizado_id.toString() === id;
  });
  return (
    <Form
      isInterfaceView={isInterfaceView}
      initialValues={examenRealizadoCurrent}
      schema={ExamenRealizadoSchema}
      setCurrent={setCurrentExamenRealizado}
      currentPath="examenes_realizados"
      {...props}
    />
  );
};
