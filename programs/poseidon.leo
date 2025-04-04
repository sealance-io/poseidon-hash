// The 'poseidon' program.
program poseidon.aleo {

    transition point_ops(el: scalar) -> public group {
        let g: group = group::GEN;
        return el*g;
    }

    transition hash8(el: field) -> public field {
        return Poseidon8::hash_to_field(el);
    }
    transition hash2(el: field) -> public field {
        return Poseidon2::hash_to_field(el);
    }
    transition hash4(el: field) -> public field {
        return Poseidon4::hash_to_field(el);
    }

    transition hash_two_elements(el1: field, el2: field) -> public field {
        return Poseidon8::hash_to_field([el1, el2]);
    }
}