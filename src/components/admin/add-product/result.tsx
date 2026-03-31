import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductTable } from "./result/index";

const Result = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h4>Resultado</h4>
        </CardTitle>
      </CardHeader>
      <ProductTable />
    </Card>
  );
};

export { Result };
