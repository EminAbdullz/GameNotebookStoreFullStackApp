import Swal from "sweetalert2";

export const notificationAfterDeleting = (callback = Function.prototype) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Delete",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "", "success");
      callback();
    }
  });
};

export const notificationAfterCreating = () => {
  Swal.fire({
    icon: "success",
    title: "Created.",
    showConfirmButton: false,
    timer: 1500,
  });
};

export const notificationAfterUpdating = () => {
  Swal.fire({
    icon: "success",
    title: "Updated.",
    showConfirmButton: false,
    timer: 1500,
  });
};
