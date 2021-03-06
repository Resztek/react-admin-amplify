import React from "react";
import { FileField } from "react-admin";
import { FileFieldProps } from "ra-ui-materialui/lib/field/FileField";
import { useStorageField } from "../hooks/useStorageField";

type Props = {
  source?: string;
  record?: any;
  storageOptions?: any;
};

export const AmplifyFileField: React.FC<Props & FileFieldProps> = ({
  source,
  record = {},
  storageOptions = {},
  ...props
}) => {
  const fieldProps = useStorageField({ source, record, storageOptions });

  if (!fieldProps) {
    return null;
  }

  return <FileField {...fieldProps} {...props} />;
};
