import React from "react";
import { Collapse, Typography } from "antd";

const { Panel } = Collapse;
const { Text } = Typography;

const FPLegend: React.FC = () => {
  return (
    <Collapse bordered={true} defaultActiveKey={["1"]}>
      <Panel header="Leggenda" key="1">
        <Text strong>Numero di componenti React:</Text>
        <Text>Il numero di componenti React utilizzati nell'applicazione.</Text>
        <br />
        <Text strong>Numero di chiamate API:</Text>
        <Text>Il numero di chiamate API effettuate dall'applicazione.</Text>
        <br />
        <Text strong>Numero di moduli:</Text>
        <Text>Il numero di moduli utilizzati nell'applicazione.</Text>
        <br />
        <Text strong>Numero di pagine:</Text>
        <Text>Il numero di pagine dell'applicazione.</Text>
        <br />
        <Text strong>Complessità delle operazioni sui dati:</Text>
        <Text>
          La complessità delle operazioni sui dati effettuate dall'applicazione,
          espresso in un valore numerico da 1 a 5, dove 1 indica una bassa
          complessità e 5 indica una elevata complessità.
        </Text>
        <br />
        <Text strong>Function Point stimati:</Text>
        <Text>
          Il valore stimato di Function Point per l'applicazione basato sui
          valori inseriti.
        </Text>
      </Panel>
    </Collapse>
  );
};

export default FPLegend;
