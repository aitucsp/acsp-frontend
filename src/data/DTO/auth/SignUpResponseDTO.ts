import * as t from 'io-ts';

const SignUpResponseDTO = t.type({
    message: t.string,
});

type SignUpResponseDTO = t.TypeOf<typeof SignUpResponseDTO>;

export default SignUpResponseDTO;
