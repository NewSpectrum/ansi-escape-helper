$ErrorActionPreference = SilentlyContinue


function SomeFunction {
	# Specifies a path to one or more locations. Wildcards are permitted.
	[Parameter(Mandatory=$true,
			   Position=Position,
			   ParameterSetName="ParameterSetName",
			   ValueFromPipeline=$true,
			   ValueFromPipelineByPropertyName=$true,
			   HelpMessage="Path to one or more locations.")]
	[ValidateNotNullOrEmpty()]
	[SupportsWildcards()]
	[string[]]$ParameterName

	begin {
		# This block is executed once for each call to the function.
	}

	process {
		# This block is executed once for each input object.
	}

	end {
		# This block is executed once after all input objects have been processed.
	}
}