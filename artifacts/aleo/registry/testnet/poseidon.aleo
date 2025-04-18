program poseidon.aleo;

function point_ops:
    input r0 as scalar.private;
    mul r0 1540945439182663264862696551825005342995406165131907382295858612069623286213group into r1;
    output r1 as group.public;

function hash2:
    input r0 as field.private;
    cast  r0 r0 into r1 as [field; 2u32];
    hash.psd2 r1 into r2 as field;
    output r2 as field.public;

function hash_two_elements:
    input r0 as field.private;
    input r1 as field.private;
    cast  r0 r1 into r2 as [field; 2u32];
    hash.psd2 r2 into r3 as field;
    output r3 as field.public;
