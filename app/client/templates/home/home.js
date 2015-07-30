/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({

	'click #startBtn': function() {
		Session.set('started', true);
	},

	'click #step0': function(e, t) {
		var name = $('#name').val();
		Session.set('name', name);
		Session.set('step', 1);
	},
	"change #category-select": function (event, template) {
        var category = $(event.currentTarget).val();
        console.log("category : " + category);
        Session.set('category', category);
        Session.set('step', 2);
    },
    "change #topic-select": function (event, template) {
        var topic = $(event.currentTarget).val();
        console.log("topic : " + topic);
        Session.set('topic', topic);
        Session.set('step', 3);
    },
    "change #specific-select": function (event, template) {
        var specific = $(event.currentTarget).val();
        console.log("specific : " + specific);
        Session.set('specific', specific);
        Session.set('step', 4);
    }
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({

	started: function() {
		return Session.get('started');
	},

	name: function() {
		return Session.get('name');
	},

	step: function(num) {
		var number = Session.get('step');
		if(number === num) {
			return true;
		} else 
			return false;
	},
	categories: function(){
        return ["an offender reintegrating into my community", "a loved one/parole officer of an offender"]
    },
    topics: function(){
        return ["Employment", "Housing", "Healthcare", "Legal", "Recovery"]
    },
    specifics: function(){
    	var top = Session.get('topic');
    	if(top=='Employment') {
    		return ["Jobs and Education for Veterans", "Jobs in my area", "No, show me all Employment resources"]
    	}else if(top=='Housing') {
    		return ["Homeless Shelters and Services", "Affordable Housing", "Recovery Housing (Oxford House)", "No, show me all Housing resources"]
    	}else if(top=='Healthcare') {
    		return ["Opioid Addiction/Fear of Overdose", "Health Care Providers in my area", "Health Coverage Information", "Find a Treatment Facility", "No, show me all Healthcare resources"]
    	}else if(top=='Legal') {
    		return ["People with Criminal Convictions", "People in Recovery from Addiction", 
    		"People on Medication Assisted Therapy", "Free Legal Programs", 
    		"No, show me all Legal resources"]
    	}else if(top=='Recovery') {
    		return ["Opioid Addiction/Fear of Overdose", "One-on-one Assesments", 
    		"Mutual Aid Groups", "Find a Treatment Facility", "Suicide Prevention", "Sustaining Recovery from Addiction",
    		"Recovery Service Providers", "Children of the Incarcerated", "Family and Friends of Inmates", "Recovery Resource Library",
    		"No, show me all Recovery resources"]
    	}
        
    },
    topic: function() {
    	return Session.get('topic');
    },
    category: function() {
    	return Session.get('category');
    },
    specific: function() {
    	return Session.get('specific');
    },
    link: function() {
    	var spef = Session.get('specific');
    	var res ={};
    	switch(spef){
    		case 'Jobs and Education for Veterans':
    			res = {
    				link: "http://www.benefits.va.gov/vocrehab/edu_voc_counseling.asp",
    				title: "Resources for Veterans",
    				description: "The United States Department of Veteran Affairs provides an Education and Career Counseling program to help Veterans get personalized counseling help for their careers and goals."
    			}
    			break;
    		case 'Jobs in my area':
    			res = {
    				link: "http://www.ajb.dni.us/",
    				title: "Department of Labor Job Bank Website and Resources",
    				description: "A collection of Job Boards filtered by state. You can search and apply for job openings as well as post your resume for employers' consideration."
    			}
    			break;
    		case 'No, show me all Employment resources"':
    			res = {
    				link: "/employment",
    				title: "Employment Resources",
    				description: ""
    			}
    			break;
    		case 'Affordable Housing':
    			res = {
    				link: "https://www.socialserve.com/",
    				title: "Social Service Housing Locator Assistance",
    				description: "1-877-428-8844 Mon-Fri 9am-8pm Find affordable housing to rent or buy in your area."
    			}
    			break;
    		case 'Recovery Housing (Oxford House)':
    			res = {
    				link: "http://www.oxfordhouse.org/locate_houses.php",
    				title: "Oxford House Vacancy Listing",
    				description: "An Oxford House is a self-run recovery house for people recovering from alcoholism and drug addiction. On this site, you can find Oxford Houses with open rooms as well as the contact information for the house."
    			}
    			break;
    		case 'No, show me all Housing resources':
    			res = {
    				link: "/housing",
    				title: "Housing Resources",
    				description: ""
    			}
    			break;
    		case 'Opioid Addiction/Fear of Overdose':
    			res = {
    				link: "http://store.samhsa.gov/product/Opioid-Overdose-Prevention-Toolkit-Updated-2014/SMA14-4742",
    				title: "Opioid Overdose Prevention Toolkit",
    				description: "Facts for Community Members, Essentials for First Responders, Safety Advice for Patients, and Resources for Overdose Survivors and Family Members"
    			}
    			break;
    		case 'Health Care Providers in my area':
    			res = {
    				link: "http://healthfinder.gov/FindServices/",
    				title: "Healthfinder.gov Services",
    				description: "Find people and places offering services and support (Doctors, Health Care Providers, etc.) by state and zip code."
    			}
    			break;
    		case 'Health Coverage Information':
    			res = {
    				link: "https://www.healthcare.gov/apply-and-enroll/health-insurance-plans-estimator-overview/",
    				title: "Healthcare.gov Insurance Programs",
    				description: "Information about applying for and enrolling in a health coverage program. Find resources for Marketplace health insurance plans."
    			}
    			break;
    		case 'Find a Treatment Facility':
    			res = {
    				link: "https://findtreatment.samhsa.gov/",
    				title: "SAMHSA's Treatment Locator",
    				description: "1-800-662-HELP (4357) Find treatment facilities near you for substance abuse and addiction or mental health problems."
    			}
    			break;
    		case 'No, show me all Healthcare resources':
    			res = {
    				link: "/healthcare",
    				title: "Healthcare Resources",
    				description: ""
    			}
    			break;
    		case 'People with Criminal Convictions':
    			res = {
    				link: "http://www.samhsa.gov/sites/default/files/partnersforrecovery/docs/LACLegal_Rights_of_People_with_Criminal_Conviction_Histories.pdf",
    				title: "Legal Rights of People with Criminal Conviction Histories",
    				description: "A PowerPoint presentation of the laws concerning people re-entering society and how they affect employment, housing, and government benefits."
    			}
    			break;
    		case 'People in Recovery from Addiction':
    			res = {
    				link: "http://store.samhsa.gov/shin/content/PHD1091/PHD1091.pdf",
    				title: "Rights of Individuals in Recovery",
    				description: "Information on the legal rights of individuals with alcohol and drug problems as they relate to housing, employment, and education."
    			}
    			break;
    		case 'People on Medication Assisted Therapy':
    			res = {
    				link: "http://www.samhsa.gov/sites/default/files/partnersforrecovery/docs/Know_Your_Rights_Brochure_0110.pdf",
    				title: "Rights of Individuals on Medication Assited Therapy",
    				description: "Information reguarding the laws that deal with people receiving Medication-Assisted Treatment for opioid addiction."
    			}
    			break;
    		case 'Free Legal Programs':
    			res = {
    				link: "http://www.lawhelp.org/",
    				title: "Free Legal Help Directory",
    				description: "Free legal aid programs and information in your state."
    			}
    			break;
    		case 'No, show me all Legal resources':
    			res = {
    				link: "/legal",
    				title: "Legal Resources",
    				description: ""
    			}
    			break;
    		case 'One-on-one Assesments':
    			res = {
    				link: "https://ncadd.org/programs-a-services/information-a-referralp",
    				title: "NCADD's Information and Referral Services",
    				description: "1-800-622-2255 Confidential, one-on-one assessments, either on the phone or in-person, by a trained professional who will match clients' needs with the appropriate services in the community."
    			}
    			break;
    		case 'Mutual Aid Groups':
    			res = {
    				link: "https://ncadd.org/index.php/recovery-support/mutual-aid-support",
    				title: "NCADD's List of Mutual Aid Groups",
    				description: "A list of support (self-help) groups for people recovering from alcoholism and drug addiction."
    			}
    			break;
    		case 'Suicide Prevention':
    			res = {
    				link: "http://www.samhsa.gov/safe-schools-healthy-students/resources/suicide-prevention",
    				title: "SAMHSA's Suicide Prevention Lifeline",
    				description: "1-800-273- TALK (8255) Call if you're feeling suicidal and need someone to talk to."
    			}
    			break;
    		case 'Sustaining Recovery from Addiction':
    			res = {
    				link: "http://www.facesandvoicesofrecovery.org/guide/support/",
    				title: "Faces and Voices of Recovery Mutual Aid Recovery Resources",
    			
    				description: "Information about the many varieties of mutual aid groups that help people sustain their recovery from alcoholism and drug addiction."
    			}
    			break;
    		case 'Recovery Service Providers':
    			res = {
    				link: "http://csgjusticecenter.org/reentry/reentry-services-directory/",
    				title: "The Council of State Governments Justice Center Re-Entry Service Directory",
    				description: "A list of organizations and service providers who specialize in different re-entry needs such as housing, employment, and family reunification."
    			}
    			break;
    		case 'Children of the Incarcerated':
    			res = {
    				link: "http://nrccfi.camden.rutgers.edu/about-us/",
    				title: "The National Resource Center on Children and Families of the Incarcerated",
    				description: "Helpful resources for the needs of the children and loved ones of the incarcerated."
    			}
    			break;
    		case 'Family and Friends of Inmates':
    			res = {
    				link: "http://www.doc.state.nc.us/Publications/2010handbook.pdf",
    				title: "Handbook for Family and Friends of Inmates",
    				description: "A guide for people who want to learn more about the needs of a loved one that has been in prison."
    			}
    			break;
    		case 'Recovery Resource Library':
    			res = {
    				link: "http://store.samhsa.gov/resources/term/Recovery-Resource-Library",
    				title: "SAMHSA's Recovery Resource Library",
    				description: "A library of helpful resources, that can be filtered by a variety of subjects, for re-entry into your community."
    			}
    			break;
    		case 'No, show me all Recovery resources':
    			res = {
    				link: "/recovery",
    				title: "Recovery Resources",
    				description: ""
    			}
    			break;
    		case 'Homeless Shelters and Services':
    			res = {
    				link: "http://www.homelessshelterdirectory.org/",
    				title: "Homeless Shelter Directory by state",
    				description: "Find Homeless Shelters and Holmeless Service Organizations by city and state."
    			}
    			break;
    		default:
    			
    			break;
    	}

    	return res;
    }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.created = function () {
};

Template.Home.rendered = function () {
};

Template.Home.destroyed = function () {
};
