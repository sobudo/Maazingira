//business logic
function Contact(insurance, plan, groupName, groupID, member, nhif, family) {
  this.insurance = insurance;
  this.planType = plan;
  this.groupName = groupName;
  this.groupID = groupID;
  this.memberID = member;
  this.nhifNo = nhif;
  this.familyMembers = family;
}

Contact.prototype.fullName = function() {
  return this.insurance + " " +
    this.planType + " " +
    this.groupName + " " +
    this.groupID + " " +
    this.memberID + " " +
    this.nhifNo + " " +
    this.familyMembers;
}
// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedInsurance = $("input#new-insurance").val();
    var inputtedPlanType = $("input#new-plan-type").val();
    var inputtedGroupName = $("input#new-group-name").val();
    var inputtedGroupID = $("input#new-group-id").val();
    var inputtedMemberID = $("input#new-member-id").val();
    var inputtedNhifNo = $("input#new-nhif-no").val();
    var inputtedFamilyMembers = $("input#new-family-members").val();

    var newContact = new Contact(inputtedInsurance, inputtedPlanType, inputtedGroupName, inputtedGroupID, inputtedMemberID, inputtedNhifNo, inputtedFamilyMembers);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".first-name").text(newContact.street);
      $(".last-name").text(newContact.city);
      $(".last-name").text(newContact.country);
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-street").val("");
    $("input#new-city").val("");
    $("input#new-country").val("");
  });
});
