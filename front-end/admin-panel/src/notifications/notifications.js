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

export const notificationAfterBlock = () => {
  Swal.fire({
    icon: "success",
    title: "User is blocked",
    showConfirmButton: false,
    timer: 1500,
  });
};

export const notificationAfterDeploy = () => {
  Swal.fire({
    icon: "success",
    title: "The user is deployed.",
    showConfirmButton: false,
    timer: 1500,
  });
};

export const notificationAfterLoginIn = () => {
  Swal.fire({
    icon: "success",
    title: "Authorized",
    showConfirmButton: false,
    timer: 1500,
  });
};

export const notificationAfterLogOut = () => {
  Swal.fire({
    title: "Are you sure?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Log out",
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Logged out", "", "success");
      localStorage.removeItem("admin");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  });
};
