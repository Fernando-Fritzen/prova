import { render, screen } from "@testing-library/react";
import Modal from '.';

describe("Modal Component", () => {
    test("Deve iniciar o botão", () => {
        render(<Modal />);

        const title = screen.getByText("Nome");

        expect(title).toBeInTheDocument();

    });
});