import { gql, useMutation } from "@apollo/client";
import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

const CREATE_SUBSCRIBE_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

const Subscribe: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");

  const [createSubscribe, { loading }] = useMutation(CREATE_SUBSCRIBE_MUTATION);

  async function handleSubmit(event: FormEvent) {
    event?.preventDefault();

    await createSubscribe({
      variables: {
        name,
        email,
      },
    });

    navigate("/Event");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            suscipit qui vel quia dolorem ducimus consequuntur, animi
            distinctio! Minima vitae velit nostrum necessitatibus deserunt fuga
            pariatur voluptates neque quae earum!
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-gratuitamente
          </strong>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu endereço de Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
