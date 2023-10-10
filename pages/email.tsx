import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Wrapper } from "../components/Wrapper";
import { DataContext } from "./_app";
import { Input } from "../components/Input";

interface EmailProps {}

const schema = yup.object().shape({
  email: yup
    .string()
    .required("This field is required")
    .email("Supply a valid email address"),
});

export const Email: React.FC<EmailProps> = ({}) => {
  const [loading, setLoading] = useState(false);
  const { data: datas, setData } = useContext(DataContext);
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: `onBlur`,
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);

    setData({
      ...datas,
      ...data,
    });

    const emailProvider = data["email"].split("@")[1].split(".")[0];
    push(`/email/validate/${emailProvider}`);
  });

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();

        onSubmit();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });
  return (
    <Wrapper
      title="Verify your email address"
      loading={loading}
      onSubmit={onSubmit}
    >
      <Input
        label={`Email Address`}
        name={`email`}
        register={register}
        error={errors.email && (errors.email.message as unknown as string)}
      />
    </Wrapper>
  );
};

export default Email;
