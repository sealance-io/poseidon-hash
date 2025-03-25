// The 'poseidon' program.
program poseidon_4.aleo {
    transition main(public a: u32, b: u32) -> u32 {
        let c: u32 = a + b;
        return c;
    }

    transition hash(el: field) -> public field {
        return Poseidon4::hash_to_field(el);
    }
    transition hash_two_elements(el1: field, el2: field) -> public field {
        return Poseidon4::hash_to_field([el1, el2]);
    }
}