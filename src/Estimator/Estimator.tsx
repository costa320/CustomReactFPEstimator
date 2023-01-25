import React, { useState } from "react";
import { Form, Input, Button } from "antd";

export interface Props {}

export interface State {
  numComponents: number;
  numAPI: number;
  numModules: number;
  numPages: number;
  dataComplexity: number;
  fp: number;
}

const FPForm: React.FC<Props> = () => {
  const [state, setState] = useState<State>({
    numComponents: 0,
    numAPI: 0,
    numModules: 0,
    numPages: 0,
    dataComplexity: 0,
    fp: 0
  });

  const handleSubmit = () => {
    const {
      numComponents,
      numAPI,
      numModules,
      numPages,
      dataComplexity
    } = state;
    const fp =
      numComponents * 5 +
      numAPI * 7 +
      numModules * 3 +
      numPages * 2 +
      dataComplexity * 4;
    setState({ ...state, fp });
  };

  return (
    <Form>
      <Form.Item label="Numero di componenti React">
        <Input
          type="number"
          onChange={(e) =>
            setState({ ...state, numComponents: parseInt(e.target.value) })
          }
        />
      </Form.Item>
      <Form.Item label="Numero di chiamate API">
        <Input
          type="number"
          onChange={(e) =>
            setState({ ...state, numAPI: parseInt(e.target.value) })
          }
        />
      </Form.Item>
      <Form.Item label="Numero di moduli">
        <Input
          type="number"
          onChange={(e) =>
            setState({ ...state, numModules: parseInt(e.target.value) })
          }
        />
      </Form.Item>
      <Form.Item label="Numero di pagine">
        <Input
          type="number"
          onChange={(e) =>
            setState({ ...state, numPages: parseInt(e.target.value) })
          }
        />
      </Form.Item>
      <Form.Item label="Complessità delle operazioni sui dati (da 1 a 5)">
        <Input
          type="number"
          onChange={(e) =>
            setState({ ...state, dataComplexity: parseInt(e.target.value) })
          }
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={handleSubmit}>
          Calcola Function Point
        </Button>
      </Form.Item>
      <Form.Item label="Function Point stimati">
        <Input value={state.fp} disabled />
      </Form.Item>
    </Form>
  );
};

export default FPForm;
