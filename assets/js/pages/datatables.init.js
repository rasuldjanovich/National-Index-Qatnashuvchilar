$(document).ready(function () {
    dTable = $("#datatable").DataTable({
        "dom": 'rtip'
        //paging: true,
        //info: false
    }), $("#datatable-buttons").DataTable({
        lengthChange: !1,
        buttons: ["copy", "excel", "pdf", "colvis"]
    }).buttons().container().appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)"), $(".dataTables_length select").addClass("form-select form-select-sm")
    
    $('#cSearch').keyup(function () {
        dTable.search($(this).val()).draw();   // this  is for customized searchbox with datatable search feature.
    })
});
